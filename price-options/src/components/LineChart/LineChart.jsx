import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarks = [
  { "id": 1, "name": "Ayesha", "math": 88, "physics": 85, "chemistry": 90 },
  { "id": 2, "name": "Rahim", "math": 74, "physics": 78, "chemistry": 72 },
  { "id": 3, "name": "Nusrat", "math": 92, "physics": 89, "chemistry": 95 },
  { "id": 4, "name": "Fahim", "math": 65, "physics": 70, "chemistry": 68 },
  { "id": 5, "name": "Sadia", "math": 80, "physics": 76, "chemistry": 82 },
  { "id": 6, "name": "Tanvir", "math": 70, "physics": 72, "chemistry": 75 },
  { "id": 7, "name": "Mim", "math": 95, "physics": 93, "chemistry": 97 },
  { "id": 8, "name": "Arif", "math": 60, "physics": 65, "chemistry": 63 },
  { "id": 9, "name": "Lamia", "math": 85, "physics": 80, "chemistry": 88 },
  { "id": 10, "name": "Sabbir", "math": 78, "physics": 75, "chemistry": 79 }
]

    return (
        <div>
            <LChart width={800} height={400} data={subjectMarks}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;