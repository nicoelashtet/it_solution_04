async function fetchWeather() {
    const cityId = '150010'; // 新潟市の地域ID
    const url = `https://weather.tsukumijima.net/api/forecast/city/${cityId}`;
    const weatherDiv = document.getElementById('weather');

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('天気情報の取得に失敗しました');

        const data = await response.json();
        const forecast = data.forecasts[0]; // Today's forecast

        weatherDiv.innerHTML = `
            <p><strong>日付:</strong> ${forecast.date}</p>
            <p><strong>天気:</strong> ${forecast.telop}</p>
            
            <img src="${forecast.image.url}" alt="${forecast.telop}" style="max-width: 100px;">
        `;
    } catch (error) {
        console.error('エラー:', error);
        weatherDiv.innerHTML = '<p id="error">天気情報の取得に失敗しました。</p>';
    }
}

fetchWeather();
