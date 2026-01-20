import { useState, useEffect } from 'react';
import Axios from 'axios';

export const Prayer = () => {
    const [prayerTimings, setPrayerTimings] = useState([]);
    const [lat, setLat] = useState(51.5);
    const [lon, setLon] = useState(-0.1);

    const styles = {
        container: { padding: '20px', maxWidth: '1000px', margin: '0 auto' },
        searchSection: { 
            display: 'flex', 
            gap: '20px', 
            marginBottom: '30px', 
            padding: '25px', 
            background: '#ffffff', 
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        coordControl: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' },
        label: { fontSize: '0.75rem', fontWeight: 'bold', color: '#666', textTransform: 'uppercase' },
        counterBox: { display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', background: '#fff' },
        counterBtn: { 
            padding: '10px 20px', 
            background: '#f1f5f9', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#6366f1',
            transition: 'background 0.2s'
        },
        displayVal: { padding: '0 20px', minWidth: '90px', textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem' },
        searchBtn: { 
            padding: '12px 40px', 
            backgroundColor: '#6366f1', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '15px',
            boxShadow: '0 4px 6px rgba(99, 102, 241, 0.2)'
        },
        table: { width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' },
        th: { backgroundColor: '#f8fafc', color: '#475569', padding: '18px', borderBottom: '3px solid #6366f1', fontWeight: '700' },
        td: { padding: '16px', borderBottom: '1px solid #f1f5f9', textAlign: 'center', fontSize: '1rem' },
        islamicMonthCell: { color: '#6366f1', fontWeight: 'bold', fontSize: '1.05rem' }
    };

    const fetchTimings = () => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        
        Axios.get(`http://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${lat}&longitude=${lon}&method=2`)
            .then((res) => {
                const data = res.data.data;
                const prayers = data.map((day) => ({
                    hijriDate: `${day.date.hijri.day} ${day.date.hijri.month.en}`,
                    timings: {
                        Fajr: day.timings.Fajr.split(' ')[0],
                        Dhuhr: day.timings.Dhuhr.split(' ')[0],
                        Asr: day.timings.Asr.split(' ')[0],
                        Maghrib: day.timings.Maghrib.split(' ')[0],
                        Isha: day.timings.Isha.split(' ')[0],
                    }
                }));
                setPrayerTimings(prayers);
            })
            .catch((err) => console.error("Data Fetch Error:", err));
    };

    // Initial load
    useEffect(() => {
        fetchTimings();
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.searchSection}>
                <div style={styles.coordControl}>
                    <label style={styles.label}>Latitude</label>
                    <div style={styles.counterBox}>
                        <button style={styles.counterBtn} onClick={() => setLat(p => parseFloat((p - 0.5).toFixed(2)))}>
                            -
                        </button>
                        <div style={styles.displayVal}>
                            {lat}
                        </div>
                        <button style={styles.counterBtn} onClick={() => setLat(p => parseFloat((p + 0.5).toFixed(2)))}>
                            +
                        </button>
                    </div>
                </div>

                {/* Longitude Counter */}
                <div style={styles.coordControl}>
                    <label style={styles.label}>Longitude</label>
                    <div style={styles.counterBox}>
                        <button style={styles.counterBtn} onClick={() => setLon(p => parseFloat((p - 0.5).toFixed(2)))}>
                            -
                        </button>
                        <div style={styles.displayVal}>
                            {lon}
                        </div>
                        <button style={styles.counterBtn} onClick={() => setLon(p => parseFloat((p + 0.5).toFixed(2)))}>
                            +
                        </button>
                    </div>
                </div>

                <button onClick={fetchTimings} style={styles.searchBtn}>
                    Generate Timings
                </button>
            </div>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Islamic Date</th>
                        <th style={styles.th}>Fajr</th>
                        <th style={styles.th}>Dhuhr</th>
                        <th style={styles.th}>Asr</th>
                        <th style={styles.th}>Maghrib</th>
                        <th style={styles.th}>Isha</th>
                    </tr>
                </thead>
                <tbody>
                    {prayerTimings.map((day, index) => (
                        <tr key={index}>
                            <td style={{...styles.td, ...styles.islamicMonthCell}}>
                                {day.hijriDate}
                            </td>
                            <td style={styles.td}>{day.timings.Fajr}</td>
                            <td style={styles.td}>{day.timings.Dhuhr}</td>
                            <td style={styles.td}>{day.timings.Asr}</td>
                            <td style={styles.td}>{day.timings.Maghrib}</td>
                            <td style={styles.td}>{day.timings.Isha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Prayer;