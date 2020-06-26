if application "Music" is running then
	tell application "Music"
		if player state is playing then
			return (get artist of current track) & " - " & (get name of current track)
		else
			return ""
		end if
	end tell
else
	return ""
end if
