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
import { mockComponent } from '../../../../helpers/testMocks';
import { BuildTools } from '../../types';
import { PreambuleYaml, PreambuleYamlProps } from '../PreambuleYaml';

it.each([[BuildTools.DotNet], [BuildTools.Gradle], [BuildTools.Maven], [BuildTools.Other]])(
  'should render correctly for %s',
  buildTool => {
    expect(shallowRender({ buildTool })).toMatchSnapshot();
  }
);

function shallowRender(props: Partial<PreambuleYamlProps> = {}) {
  return shallow<PreambuleYamlProps>(
    <PreambuleYaml buildTool={BuildTools.DotNet} component={mockComponent()} {...props} />
  );
}
