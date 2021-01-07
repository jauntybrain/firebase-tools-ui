/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import Auth from './components/Auth';
import Database from './components/Database';
import Firestore from './components/Firestore';
import Home from './components/Home';
import LogsViewer from './components/LogViewer';

export interface Route {
  path: string;
  // multiPath enables paths that contain tabs to accept multiple path alternatives
  multiPath?: string;
  component: React.FC;
  label: string;
  exact: boolean;
  showInNav: boolean;
  showInFirestoreSubNav?: boolean;
}

export const routes: ReadonlyArray<Route> = [
  // Firebase Nav tabs
  {
    path: '/',
    component: Home,
    label: 'Overview',
    exact: true,
    showInNav: true,
  },
  {
    path: '/auth',
    component: Auth,
    label: 'Authentication',
    exact: false,
    showInNav: true,
  },
  {
    // it accepts either /firestore/data or /firestore/requests
    path: '/firestore/data',
    multiPath: '/firestore/:tab(data|requests)',
    component: Firestore,
    label: 'Firestore',
    exact: false,
    showInNav: true,
  },
  {
    path: '/database',
    component: Database,
    label: 'Realtime Database',
    exact: false,
    showInNav: true,
  },
  {
    path: '/logs',
    component: LogsViewer as any,
    label: 'Logs',
    exact: true,
    showInNav: true,
  },

  // Firestore SubNav tabs
  {
    path: '/firestore/data',
    component: Firestore,
    label: 'Data',
    exact: false,
    showInNav: false,
    showInFirestoreSubNav: true,
  },
  {
    path: '/firestore/requests',
    // it accepts either /firestore/requests or /firestore/requests/:requestId
    multiPath: '/firestore/:tab(requests|requests/:requestId)',
    component: Firestore,
    label: 'Requests',
    exact: false,
    showInNav: false,
    showInFirestoreSubNav: true,
  },
];
