import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

import { PanelModule } from 'primeng/panel';
//import { ToastModule } from 'primeng/toast';
//import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { TabViewModule } from 'primeng/tabview';

import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
//import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
//import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { ConfirmDialogModule, ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    exports: [
        AutoCompleteModule,
        KeyFilterModule,
        InputTextModule,
        DialogModule,
        ConfirmDialogModule,
        ButtonModule,
        CheckboxModule,
        PanelModule,
        //ToastModule,
        // MegaMenuModule,
        MenubarModule,
        TableModule,
        TreeTableModule,
        TabViewModule,
        MessageModule,
        CardModule,
        //ChartModule,
        ProgressSpinnerModule,
        OverlayPanelModule,
        BreadcrumbModule,
        CalendarModule,
        SidebarModule,
        //DynamicDialogModule,
        InputTextareaModule,
        MessagesModule,
        FieldsetModule,
        DropdownModule,
        // PasswordModule,
        MultiSelectModule,
        RadioButtonModule,
        ToggleButtonModule,
        ToolbarModule,
        FileUploadModule,
        SelectButtonModule,
        TooltipModule
    ]
})
export class PrimeNgModule { }
