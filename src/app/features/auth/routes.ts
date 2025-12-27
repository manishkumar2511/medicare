import { Routes } from "@angular/router";
import { LoginComponent } from "./login";
import { redirectIfAuthenticatedGuard } from "../../core/guards";
import { OwnerRegistrationComponent } from "./owner-registration";
import { StoreRegistrationComponent } from "./store-registration";

export const authRoutes: Routes = [
  {
    path: "login",
    title: "Login",
    component: LoginComponent,
    canActivate: [redirectIfAuthenticatedGuard],
  },
  { path: "store-registration", title: "Store Registration", component: StoreRegistrationComponent },
  { path: "owner-registration", title: "Owner Registration", component: OwnerRegistrationComponent }
];
  