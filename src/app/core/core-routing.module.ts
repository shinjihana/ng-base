import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : AdminLayoutComponent
  },
  { 
    path: 'dashboard', 
    loadChildren: './views/dashboard/dashboard.module#DashboardModule', 
    data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
  },
  {
    path: 'flashcard',
    loadChildren : './flashcards/flashcards.module#FlashcardsModule',
    data: { title: 'flashcard', breadcrumb: 'FLASHCARD'}
  },
  {
    path : 'login',
    loadChildren : './auth/auth.module#AuthModule',
    data: { title: 'Login', breadcrumb: 'LOGIN'}
  },
  {
    path: 'dialogs', 
    loadChildren: './views/app-dialogs/app-dialogs.module#AppDialogsModule', 
    data: { title: 'Dialogs', breadcrumb: 'DIALOGS'}
  },
  {
    path: 'profile', 
    loadChildren: './views/profile/profile.module#ProfileModule', 
    data: { title: 'Profile', breadcrumb: 'PROFILE'}
  },
  {
    path: 'others', 
    loadChildren: './views/others/others.module#OthersModule', 
    data: { title: 'Others', breadcrumb: 'OTHERS'}
  },
  {
    path: 'tables', 
    loadChildren: './views/tables/tables.module#TablesModule', 
    data: { title: 'Tables', breadcrumb: 'TABLES'}
  },
  {
    path: 'forms', 
    loadChildren: './views/forms/forms.module#AppFormsModule', 
    data: { title: 'Forms', breadcrumb: 'FORMS'}
  },
  {
    path: 'charts', 
    loadChildren: './views/charts/charts.module#AppChartsModule', 
    data: { title: 'Charts', breadcrumb: 'CHARTS'}
  },
  {
    path: 'dragndrop', 
    loadChildren: './views/dragndrop/dragndrop.module#DragndropModule', 
    data: { title: 'Drag and Drop', breadcrumb: 'DND'}
  },
  {
    path: 'inbox', 
    loadChildren: './views/app-inbox/app-inbox.module#AppInboxModule', 
    data: { title: 'Inbox', breadcrumb: 'INBOX'}
  },
  {
    path: 'chat', 
    loadChildren: './views/app-chats/app-chats.module#AppChatsModule', 
    data: { title: 'Chat', breadcrumb: 'CHAT'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
