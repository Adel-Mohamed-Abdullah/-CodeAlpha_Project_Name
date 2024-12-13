function CalculateAge()
        {
            const day = parseInt(document.getElementById('day').value);
            const month = parseInt(document.getElementById('month').value);
            const year = parseInt(document.getElementById('year').value);

            if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900) {
                document.getElementById('result').textContent = 'Please enter a valid date of birth.';
                return;
            }

            const today = new Date();
            const birthDate = new Date(year, month - 1, day);

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            if (days < 0) {
                months--;
                days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            document.getElementById('result').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
        }