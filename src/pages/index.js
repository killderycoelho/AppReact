import Comunication from './comunication';
import Page2 from './page2';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const Routes = createAppContainer(
    createDrawerNavigator({
        Comunicatin: Comunication,
        Page2: Page2
    })
);

export default Routes;
