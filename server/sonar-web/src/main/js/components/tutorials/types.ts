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
export enum TutorialModes {
  Manual = 'manual',
  Jenkins = 'jenkins',
  BitbucketPipelines = 'bitbucket-pipelines',
  GitLabCI = 'gitlab-ci',
  GitHubActions = 'github-actions',
  AzurePipelines = 'azure-pipelines'
}

export enum BuildTools {
  Maven = 'maven',
  Gradle = 'gradle',
  CFamily = 'cfamily',
  DotNet = 'dotnet',
  Other = 'other'
}

export enum OSs {
  Linux = 'linux',
  Windows = 'win',
  MacOS = 'mac'
}

export type ManualTutorialConfig =
  | { buildTool?: BuildTools.Maven | BuildTools.Gradle | BuildTools.DotNet }
  | { buildTool: BuildTools.Other | BuildTools.CFamily; os?: OSs };
