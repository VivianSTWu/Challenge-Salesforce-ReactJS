import { useState } from 'react';

const ClickerColector = ({ children }) => {
    const [data, setData] = useState([]);

    const trackClickAndPosition = (event) => {
        const clickData = {
            timestamp: new Date().toISOString(),
            xPosition: event.clientX,
            yPosition: event.clientY
        };

        setData(prevData => [...prevData, clickData]);

        saveDataToCSV();
    }

    const saveDataToCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Timestamp,X Position,Y Position\n";

        data.forEach(click => {
            csvContent += click.timestamp + "," + click.xPosition + "," + click.yPosition + "\n";
        });

 
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "navigation_data.csv");
        document.body.appendChild(link);

        link.click();
        

        document.body.removeChild(link);
    }

    return (
        <div style={{}} onClick={trackClickAndPosition}>
            {children}
        </div>
    );
}

export default ClickerColector;