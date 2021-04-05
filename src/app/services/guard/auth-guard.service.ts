import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  public res: boolean;

  constructor(private auth: AuthService, private router: Router) {
  }

  async canActivate(): Promise<boolean> {
    await this.auth.isLoggedIn().toPromise().then(result => {
      this.res = result;
    });
    if (!this.res) {
      await this.router.navigateByUrl('/');
      window.alert('session expired');
      this.auth.logout();
      return false;
    } else {
      return true;
    }
  }
}