import { Progress } from '@mantine/core';
import {Box} from "@chakra-ui/react";

const TemptResultBar = () => {
    return (
        <Box width="800px" padding={10}>
            ALL
            <Progress
                mt="md"
                size={24}
                radius="sm"
                sections={[
                    { value: 25, color: 'gray', label: 'OFF - QC1' },
                    { value: 25, color: 'green', label: 'Good ~ QC2' },
                    { value: 25, color: 'yellow', label: 'OK ~ QC3' },
                    { value: 25, color: 'red', label: 'Bad ~ QC4' },
                ]}
            />

            QC1
            <Progress
                mt="md"
                size={24}
                radius="sm"
                sections={[
                    { value: 25, color: 'gray', label: 'OFF - QC1' },
                    { value: 0, color: 'green', label: 'Good ~ QC2' },
                    { value: 0, color: 'yellow', label: 'OK ~ QC3' },
                    { value: 0, color: 'red', label: 'Bad ~ QC4' },
                    { value: 75, color: 'black', label: 'Take Out Green sticker & Scan' },
                ]}
            />

            QC2
            <Progress
                mt="md"
                size={24}
                radius="sm"
                sections={[
                    { value: 0, color: 'gary', label: 'OFF - QC1' },
                    { value: 25, color: 'green', label: 'Good ~ QC2' },
                    { value: 0, color: 'yellow', label: 'OK ~ QC3' },
                    { value: 0, color: 'red', label: 'Bad ~ QC4' },
                    { value: 75, color: 'black', label: 'Product within target temperature' },
                ]}
            />

            QC3
            <Progress
                mt="md"
                size={24}
                radius="sm"
                sections={[
                    { value: 0, color: 'gary', label: 'OFF - QC1' },
                    { value: 0, color: 'green', label: 'Good ~ QC2' },
                    { value: 25, color: 'yellow', label: 'OK ~ QC3' },
                    { value: 0, color: 'red', label: 'Bad ~ QC4' },
                    { value: 75, color: 'black', label: 'Product was over temperature for 2-4 hours' },
                ]}
            />
QC4
            <Progress
                mt="md"
                size={24}
                radius="sm"
                sections={[
                    { value: 0, color: 'gary', label: 'OFF - QC1' },
                    { value: 0, color: 'green', label: 'Good ~ QC2' },
                    { value: 0, color: 'yellow', label: 'OK ~ QC3' },
                    { value: 25, color: 'red', label: 'Bad ~ QC4' },
                    { value: 75, color: 'black', label: 'Product was over temperature for 4+ hours' },
                ]}
            />


        </Box>
    );
};

export default TemptResultBar;