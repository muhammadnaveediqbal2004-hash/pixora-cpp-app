import {useState, useEffect} from 'react';
import Axios from 'axios';

export const Prayer = () => {
    const [prayerTimings, setprayerTimings] = useState([]);
    useEffect(() => {
        fetchFact();
    }, []);

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
        },
        button: {
            padding: '10px 20px',
            marginBottom: '20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px'
        },
        th: {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '12px',
            border: '1px solid #ddd'
        },
        td: {
            padding: '12px',
            border: '1px solid #ddd',
            textAlign: 'center'
        }
    };

    const fetchFact = () => {
        Axios.get("http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2")
            .then((res) => {
                const prayers = [];
                const data = res.data.data;
                data.map((element) => {
                    const p = {
                        Fajr: element.timings.Fajr,
                        Dhuhr: element.timings.Dhuhr,
                        Asr: element.timings.Asr,
                        Maghrib: element.timings.Maghrib,
                        Isha: element.timings.Isha,
                    }
                    prayers.push(p);
                    console.log(prayerTimings.length);

                });

                setprayerTimings(prayers)
            });
    };

    return <div style={styles.container}>
            <div>
              
            </div>
        <button onClick={fetchFact} style={styles.button}>Find Prayers data</button>
        <table style={styles.table}>
            <thead>
            <tr>
                <th style={styles.th}>Fajr</th>
                <th style={styles.th}>Dhuhr</th>
                <th style={styles.th}>Asr</th>
                <th style={styles.th}>Maghrib</th>
                <th style={styles.th}>Isha</th>
            </tr>
            </thead>
            <tbody>
            {prayerTimings.map((element, index) => (
                <tr key={index}>
                    <td style={styles.td}>{element.Fajr}</td>
                    <td style={styles.td}>{element.Dhuhr}</td>
                    <td style={styles.td}>{element.Asr}</td>
                    <td style={styles.td}>{element.Maghrib}</td>
                    <td style={styles.td}>{element.Isha}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default Prayer;