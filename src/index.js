// styles
import './styles.css';

// template
import content from './data/menu.json';
import menuItemTemplate from './templates/template.hbs';
import { menu } from './js/generateMenu';

menu.buildMenuItems(content, menu.list);

// theme
import * as theme from './js/theme';

theme.changeTheme();
theme.setCheckboxPosition();
theme.controller.switchThems();
