
import { Table } from "@mantine/core";
import { MoodSmile, MoodEmpty, MoodSad, CircleOff } from 'tabler-icons-react';

const TempModeResults = () => {
    return (
        <Table cellPadding="10px">
            <thead>
            <tr>
                <th> <CircleOff //MoodOff
                    size={48}
                    strokeWidth={2}
                    color={'#2E2EFF'}
                />
                </th>
                <th> <MoodSmile
                    size={48}
                    strokeWidth={2}
                    color={'#8ad279'}
                />
                </th>
                <th>
                    <MoodEmpty
                        size={48}
                        strokeWidth={2}
                        color={'#f59f00'}
                    />
                </th>
                <th>
                    <MoodSad
                        size={48}
                        strokeWidth={2}
                        color={'#bf4040'}
                    />
                </th>
            </tr>
            <tr>
                <th>OFF ~ QC1</th>
                <th>Good ~ QC2</th>
                <th>OK ~ QC3</th>
                <th>Bad ~ QC4</th>
            </tr>


            </thead>

        </Table>
    );
};

export default TempModeResults;