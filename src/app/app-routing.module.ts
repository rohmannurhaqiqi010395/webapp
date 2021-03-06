import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { AuthGuard } from "./core/_guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    data: { pageTitle: "Home" },
    // canActivate: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "dashboard/analytics",
        pathMatch: "full"
      },
      {
        path: "app-views",
        loadChildren: "./features/app-views/app-views.module#AppViewsModule",
        data: { pageTitle: "App Views" }
      },
      {
        path: "dashboard",
        loadChildren: "./features/dashboard/dashboard.module#DashboardModule",
        data: { pageTitle: "Dashboard" }
      },
      {
        path: "e-commerce",
        loadChildren: "./features/e-commerce/e-commerce.module#ECommerceModule",
        data: { pageTitle: "E-commerce" }
      },
      {
        path: "forms",
        loadChildren: "./features/forms/forms-showcase.module#FormsShowcaseModule",
        data: { pageTitle: "Forms" }
      },
      {
        path: "graphs",
        loadChildren:
          "./features/graphs/graphs-showcase.module#GraphsShowcaseModule",
        data: { pageTitle: "Graphs" }
      },
      {
        path: "maps",
        loadChildren: "./features/maps/maps.module#MapsModule",
        data: { pageTitle: "Maps" }
      },
      {
        path: "miscellaneous",
        loadChildren:
          "./features/miscellaneous/miscellaneous.module#MiscellaneousModule",
        data: { pageTitle: "Miscellaneous" }
      },
      {
        path: "outlook",
        loadChildren: "./features/outlook/outlook.module#OutlookModule",
        data: { pageTitle: "Outlook" }
      },
      {
        path: "smartadmin",
        loadChildren:
          "./features/smartadmin-intel/smartadmin-intel.module#SmartadminIntelModule",
        data: { pageTitle: "Smartadmin" }
      },
      {
        path: "tables",
        loadChildren: "./features/tables/tables.module#TablesModule",
        data: { pageTitle: "Tables" }
      },
      {
        path: "ui",
        loadChildren: "./features/ui-elements/ui-elements.module#UiElementsModule",
        data: { pageTitle: "Ui" }
      },
      {
        path: "widgets",
        loadChildren: "./features/widgets/widgets-showcase.module#WidgetsShowcaseModule",
        data: { pageTitle: "Widgets" }
      },
      {
        path: "hardware",
        loadChildren: "./features/hardware/hardware.module#HardwareModule",
        data: { pageTitle: "Hardware" }
      },
      {
        path: "user",
        loadChildren: "./features/user/user.module#UserModule",
        data: { pageTitle: "User" }
      },
      {
        path: "data",
        loadChildren: "./features/data/data.module#DataModule",
        data: { pageTitle: "Data" }
      },
      {
        path: "mail",
        loadChildren: "./features/mail/mail.module#MailModule",
        data: { pageTitle: "Data" }
      },
      {
        path: "content",
        loadChildren: "./features/content/content.module#ContentModule",
        data: { pageTitle: "Content" }
      },
      {
        path: "saving-report",
        loadChildren: "./features/saving-report/saving-report.module#SavingReportModule",
        data: { pageTitle: "Saving Report" }
      }
    ]
  },

  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: "./features/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "miscellaneous/error404" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
