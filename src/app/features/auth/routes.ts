import { Routes } from "@angular/router";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { redirectIfAuthenticatedGuard } from "../../core/guards";

export const authRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [redirectIfAuthenticatedGuard],
  },
  { path: "register", component: RegisterComponent }
];
  