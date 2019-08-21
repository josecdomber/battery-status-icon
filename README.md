# <jcdb-battery-status-icon>

Web component to create battery level icons, based on LitElement.
```
<dile-input label="The label" placeholder="Write something..."></dile-input>
```

# Install

```
npm install jcdb-battery-status-icon
```

## Import the component

### Into your HTML page

```
<script src="./node_modules/jcdb-battery-status-icon/jcdb-battery-status-icon.js" type="module"></script>
```

### ... or into your module script

```
import 'jcdb-battery-status-icon/jcdb-battery-status-icon';
```
## Use the component

```
<jcdb-battery-status-icon
  icon="battery_full"
></jcdb-battery-status-icon>
```

The icon property is used to set the icon you want to show. There are icons to shows the battery status

## Icons available:

The icon property accepts the battery status icons listed below: 

- battery_20
- battery_30
- battery_50
- battery_60
- battery_80
- battery_90
- battery_alert
- battery_charging_20
- battery_charging_30
- battery_charging_50
- battery_charging_60
- battery_charging_80
- battery_charging_90
- battery_charging_full
- battery_full
- battery_unknow

Note that the name of the icon is always in lowercase.

## Custom styles

You can customize the icon styles using CSS Custom Styles.

Custom property | Description | Default
----------------|-------------|---------
--jcdb-battery-status-icon-size | Font size for the icon | 24px
--jcdb-battery-status-icon-color | Color for the icon | #888