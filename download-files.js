const paths = [
	'ui/hud/building_tooltip/bg_overlay.lossless.noinline.png',
	'ui/hud/ingame_settings/bg.lossless.noinline.png'
]
let count = 0
for (const path of paths) {
	const filename = path.split('/').at(-1)
	const a = document.createElement('a')
	a.href = `https://yorg3.io/v/a79e8b3c/res/${path}`
	a.download = filename
	setTimeout(a.click.bind(a), count * 250)
	count++
}
