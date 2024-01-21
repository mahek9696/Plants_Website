const fs = require('fs')

function loadJSON(filename = '')
{
	if(fs.existsSync(filename))
	{
		return fs.readFileSync(filename).toString()
	}
	else
	{
		return ''
	}
}

console.log(
	JSON.parse(
		fs.readFileSync('data.json').toString()
		)
	)