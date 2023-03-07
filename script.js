function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    const [hours, minutes] = alarmTime.split(':');
    const now = new Date();
    const alarm = new Date();
    alarm.setHours(parseInt(hours, 10));
    alarm.setMinutes(parseInt(minutes, 10));
    alarm.setSeconds(0);
    if (alarm < now) {
      alarm.setDate(alarm.getDate() + 1);
    }
    const timeUntilAlarm = alarm - now;
    setTimeout(playAlarm, timeUntilAlarm);
  }
  function playAlarm() {
    const alarmSound = document.getElementById('alarmSound');
    alarmSound.play();
  }