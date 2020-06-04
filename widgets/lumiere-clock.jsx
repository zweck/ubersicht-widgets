export const command = `date +'%a %d/%-m · %H:%M'`
export const refreshFrequency = 2000;
export const render = ({ output }) => {
  window.LumiereDate = output;

  return null
}
