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
import { shallow } from 'enzyme';
import * as React from 'react';
import {
  mockAlmSettingsInstance,
  mockProjectBitbucketBindingResponse,
  mockProjectBitbucketCloudBindingResponse,
  mockProjectGithubBindingResponse,
  mockProjectGitLabBindingResponse
} from '../../../../helpers/mocks/alm-settings';
import MultiBranchPipelineStep, { MultiBranchPipelineStepProps } from '../MultiBranchPipelineStep';
import { renderStepContent } from '../test-utils';

it('should render correctly', () => {
  const wrapper = shallowRender();
  expect(wrapper).toMatchSnapshot('Step wrapper');
  expect(renderStepContent(wrapper)).toMatchSnapshot('content for bitbucket');
  expect(
    renderStepContent(
      shallowRender({
        almBinding: mockAlmSettingsInstance({ url: 'https://bitbucket.org/workspaceId/' }),
        projectBinding: mockProjectBitbucketCloudBindingResponse()
      })
    )
  ).toMatchSnapshot('content for bitbucket cloud');
  expect(
    renderStepContent(
      shallowRender({
        almBinding: mockAlmSettingsInstance({ url: 'https://api.github.com/' }),
        projectBinding: mockProjectGithubBindingResponse()
      })
    )
  ).toMatchSnapshot('content for github');
  expect(
    renderStepContent(shallowRender({ projectBinding: mockProjectGitLabBindingResponse() }))
  ).toMatchSnapshot('content for gitlab');
});

function shallowRender(props: Partial<MultiBranchPipelineStepProps> = {}) {
  return shallow<MultiBranchPipelineStepProps>(
    <MultiBranchPipelineStep
      finished={false}
      onDone={jest.fn()}
      onOpen={jest.fn()}
      open={true}
      projectBinding={mockProjectBitbucketBindingResponse()}
      {...props}
    />
  );
}
