/*
 * SonarQube
 * Copyright (C) 2009-2021 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { translate } from 'sonar-ui-common/helpers/l10n';
import { AlmSettingsInstance, ProjectAlmBindingResponse } from '../../../types/alm-settings';
import Step from '../components/Step';
import YamlFileStep from '../components/YamlFileStep';
import AnalysisCommand from './AnalysisCommand';
import RepositoryVariables from './RepositoryVariables';

export enum Steps {
  REPOSITORY_VARIABLES = 1,
  YAML = 2
}

export interface BitbucketPipelinesTutorialProps {
  almBinding?: AlmSettingsInstance;
  baseUrl: string;
  component: T.Component;
  currentUser: T.LoggedInUser;
  projectBinding: ProjectAlmBindingResponse;
}

export default function BitbucketPipelinesTutorial(props: BitbucketPipelinesTutorialProps) {
  const { almBinding, baseUrl, currentUser, component, projectBinding } = props;

  const [step, setStep] = React.useState<Steps>(Steps.REPOSITORY_VARIABLES);
  return (
    <>
      <Step
        finished={step > Steps.REPOSITORY_VARIABLES}
        onOpen={() => setStep(Steps.REPOSITORY_VARIABLES)}
        open={step === Steps.REPOSITORY_VARIABLES}
        renderForm={() => (
          <RepositoryVariables
            almBinding={almBinding}
            baseUrl={baseUrl}
            component={component}
            currentUser={currentUser}
            onDone={() => setStep(Steps.YAML)}
            projectBinding={projectBinding}
          />
        )}
        stepNumber={Steps.REPOSITORY_VARIABLES}
        stepTitle={translate('onboarding.tutorial.with.bitbucket_pipelines.create_secret.title')}
      />
      <Step
        onOpen={() => setStep(Steps.YAML)}
        open={step === Steps.YAML}
        renderForm={() => (
          <YamlFileStep>
            {buildTool => <AnalysisCommand buildTool={buildTool} component={component} />}
          </YamlFileStep>
        )}
        stepNumber={Steps.YAML}
        stepTitle={translate('onboarding.tutorial.with.bitbucket_pipelines.yaml.title')}
      />
    </>
  );
}
