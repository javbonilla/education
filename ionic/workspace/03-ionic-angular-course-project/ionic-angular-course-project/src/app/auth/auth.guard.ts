import { CanMatchFn, Route, Router, UrlSegment } from "@angular/router";
import { AuthService } from "./service/auth.service";
import { inject } from "@angular/core";

export const authGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  if (inject(AuthService).userIsAuthenticated) {
    return true;
  }

  // Redirect to auth page
  return inject(Router).parseUrl('/auth');
};
