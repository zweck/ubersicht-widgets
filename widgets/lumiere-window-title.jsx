export const command = "/usr/local/bin/yabai -m query --windows | /usr/local/bin/jq -c '.[] | select(.focused | contains(1))'"

function safeJson(raw) {
  let result = '';

  try {
    result = JSON.parse(raw);
  } catch (e) {
  }

  return result
}

export const render = ({ output }) => {
  const yabai = safeJson(output)

  let { app, title } = yabai;
  title = (title || '').replace(/^\[[0-9]+\]/, '').trim()

  function computeTitle() {
    if (!app) {
      return '';
    }

    return `[${app}] ${title}`.trim();
  }

  window.LumiereWindowTitle = computeTitle()

  return null;
}

export const refreshFrequency = 500;
