import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TreeTableModule } from 'primeng/treetable';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { CheckboxModule } from 'primeng/checkbox';

import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmationService, MessageService } from 'primeng/api';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';

import {DialogService, DynamicDialogConfig, DynamicDialogModule} from 'primeng/dynamicdialog';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import {DataViewModule} from 'primeng/dataview';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    TabViewModule,
    InputNumberModule


  ]
})
export class PrimengModule { }
