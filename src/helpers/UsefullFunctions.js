//abhishek360

export function get24hrsTo12(hours, minutes) {
  const AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = (hours % 12) || 12;
  const time = hours + ":" + minutes + " " + AmOrPm;
  return time;
}

export function renderDateTime(jsTime) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                          'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date(jsTime);
  const time = get24hrsTo12(date.getHours(), date.getMinutes());
  const res = date.getDate()+' '+months[date.getMonth()]+', '+date.getFullYear()+' '+time;
  return res;
}

export function nth(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

export function renderDay(jsTime) {
  const date = new Date(jsTime);
  const res = date.getDate()+nth(date.getDate());
  return res;
}

export function renderMonth(jsTime) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                          'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date(jsTime);
  const res = months[date.getMonth()];
  return res;
}

export function renderTime(jsTime) {
  const date = new Date(jsTime);
  const time = get24hrsTo12(date.getHours(), date.getMinutes());
  return time;
}

export function capitalFirst(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getOrderId(shopId, orderId){
  return getShopId(shopId)+'OD'+orderId;
}

export function getShopId(shopId){
  var sId = ''+shopId;
  const sLen = sId.length;

  for(var i=0; i<4-sLen; i++){
    sId = '0'+sId;
  }

  return 'SP'+sId;
}

export function getStatusColor(status){
  switch(status.toLowerCase()){
    case "initiated" :
      return 'blue';

    case "accepted" :
      return '#285943';

    case "rejected" :
      return 'red';

    case "canceled" :
      return 'red';

    case "readytodispatch" :
      return 'orange';

    case "delivered" :
      return '#bfb051';
    
    case "paid" :
      return 'green';

    case "enabled" :
      return 'green';

    case "disabled" :
      return 'red';    

    default:
      return 'blue';
  }
}

  export function getPageRange(ranges, org_page){

    var rangeStr = '';
    
    if(ranges.length === 1){
      if(ranges[0].from === 1 && ranges[0].to === org_page)
      return 'All Pages.';
    }

    ranges.map((range) => {
      const from = range.from;
      const to = range.to;

      if(from===to){
        rangeStr = rangeStr+from+', ';
      }
      else {
        rangeStr = rangeStr+from+'-'+to+', ';
      }
      return true;
    })
    rangeStr = rangeStr.slice(0, rangeStr.length-2) + '.';

    return rangeStr;
  }

