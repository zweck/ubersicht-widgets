// Use the command below if you want mpc/iTunes/Spotify
// Note that it might increase CPU usage because AppleScript is slow AF.
// export const command = `osascript lumiere/current-track.applescript`
export const command = "/usr/bin/osascript lumiere/itunes-now-playing.applescript"
export const render = ({ output }) => {
  window.LumiereMusic = output
}
export const refreshFrequency = 2500;
