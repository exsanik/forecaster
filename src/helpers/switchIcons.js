import React from 'react'

function iconSwitch(icon) {
  const code = icon.match(/\d+/g)[0]
  const time = icon[icon.length - 1] === 'n' ? 'night' : 'day'
  let style = ''
  switch (code) {
    case '01':
      if (time === 'night') {
        style = `wi wi-${time}-clear`
      } else {
        style = `wi wi-${time}-sunny`
      }
      return <i className={style} />
    case '02':
    case '03':
      style = `wi wi-${time}-cloudy`
      return <i className={style} />
    case '04':
      style = `wi wi-cloudy`
      return <i className={style} />
    case '09':
      style = `wi wi-${time}-rain`
      return <i className={style} />
    case '10':
      style = `wi wi-${time}-sleet`
      return <i className={style} />
    case '11':
      style = `wi wi-${time}-thunderstorm`
      return <i className={style} />
    case '13':
      style = 'wi wi-snowflake-cold'
      return <i className={style} />
    case '50':
      style = `wi wi-${time}-fog`
      return <i className={style} />
    default:
      style = `wi wi-${time}-cloudy`
      return <i className={style} />
  }
}

export default iconSwitch
