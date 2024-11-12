# Enable/Disable Press and Hold Key for Accent Marks on macOS

This gist is a copy of the answer by [Nico Schlömer](https://apple.stackexchange.com/users/207895/nico-schl%c3%b6mer) on StackExchange to the following post [macOS: Disable popup showing accented characters when holding dowan a key](https://apple.stackexchange.com/questions/332769/macos-disable-popup-showing-accented-characters-when-holding-down-a-key).

> Thank you Nico!

## Disable

In macOS, when a key is held down while entering text, a popup is shown which lets one choose between various accented forms of the character. To disable this execute the following command line in the Terminal.app:

```bash
defaults write -g ApplePressAndHoldEnabled -bool false
```
Now, you'll need to log out and log back in. This should disable the display of the popup and character typed should start repeating when the key is held down.

## Enable

If you ever wish to return to this behaviour, execute the following command line in the Terminal.app:

```bash
defaults write -g ApplePressAndHoldEnabled -bool true
```

You'll need to log out and log back in again for the setting to take effect.