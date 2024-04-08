import {NavigationAction} from '@react-navigation/native';
import {DrawerActions} from 'react-navigation-drawer';
let instance = null;
let debounce;
let debounceDrawer;

/**
 * Wrapper class for react-navigation to provide navigation functionality within another service
 * @class
 */
class NavigationService {
  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;

    this.navigator = null;
  }

  /**
   * Set the navigation configuration
   *
   * @param   { Object }    nav       Contains the state navigation
   * @param   { Object }    dispatch  Handle the triggering of navigation action
   * @returns { void }
   */
  setNavigator(nav, dispatch) {
    this.navigator = {
      nav,
      dispatch,
    };
  }

  /**
   * Set the navigation configuration
   *
   * @param   { Object }    nav       Contains the state navigation
   * @param   { Object }    dispatch  Handle the triggering of navigation action
   * @returns { void }
   */

  setTopLevelNavigator(navigatorRef) {
    this.navigator = navigatorRef;
  }

  /**
   * Navigates to the specified screen
   *
   * @param   { string }    routeName   Specific name of the screen route
   * @param   { Object }    params      Contains optional parameter to be passed during navigation
   * @returns { void }
   */
  navigate(routeName, params) {
    if (this.navigator) {
      if (debounce) {
        return;
      }

      this.navigator.dispatch(
        NavigationAction.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params,
        }),
      );

      debounce = setTimeout(() => {
        debounce = 0;
      }, 1000);
    }
  }

  /**
   * Replace current state with a new state
   *
   * @param   { string }    routeName   Specific name of the screen route
   * @param   { Object }    params      Contains optional parameter to be passed during navigation
   * @returns { void }
   */
  reset(routeName, params) {
    if (this.navigator) {
      this.navigator.dispatch(
        NavigationAction.reset({
          type: 'Navigation/NAVIGATE',
          routeName,
          params,
        }),
      );
    }
  }

  /**
   * Go back to previous state of the navigation
   *
   * @returns { void }
   */
  goBack() {
    if (this.navigator) {
      if (debounce) {
        return;
      }

      this.navigator.dispatch(NavigationAction.back({}));

      debounce = setTimeout(() => {
        debounce = 0;
      }, 1000);
    }
  }

  /**
   * Navigates to open side menu
   *
   * @returns { void }
   */
  openMenu() {
    if (this.navigator) {
      this.navigator.dispatch(
        NavigationAction.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: 'DrawerOpen',
          params: '',
        }),
      );
    }
  }
}

export default new NavigationService();
