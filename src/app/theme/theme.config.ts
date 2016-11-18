import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from './theme.configProvider';
import {colorHelper} from './theme.constants';

@Injectable()
export class BaThemeConfig {

  constructor(private _baConfig:BaThemeConfigProvider) {
    this._config();
  }

  private _config() {
      this._baConfig.changeTheme({name: 'mint'});
  }
}
