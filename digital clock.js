let is24hrs = true;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        function updateClock() {
            const now = new Date();

            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            let ampm = '';
            if(is24hrs === false) {
                ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; 
            }

            const formattedHours = padZero(hours);
            const formattedMinutes = padZero(minutes);
            const formattedSeconds = padZero(seconds);

            document.getElementById('time').textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}${ampm}`;
            document.getElementById('date').textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            document.getElementById('timezone').textContent = timezone;
        }

        function padZero(time) {
            return time.toString().padStart(2, '0');
        }

        updateClock();
        setInterval(updateClock, 1000);

        function setTimeFormat(format) {
            is24hrs = format === '24';

            document.getElementById('format12').classList.toggle('active', format === 12);
            document.getElementById('format24').classList.toggle('active', format === 24);
        }