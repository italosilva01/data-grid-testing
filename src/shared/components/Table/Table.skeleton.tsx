import { Paper, Box, Skeleton } from '@mui/material';

export const TableSkeleton = () => {
    return (
        <Paper className="shadow-lg rounded-lg overflow-hidden">
            <Box className="p-4">
                <Skeleton
                    variant="rectangular"
                    height={48}
                    className="mb-4 rounded"
                />
                <Box className="p-4 flex flex-col gap-4 mt-4">
                    {[...Array(5)].map((_, index) => (
                        <Skeleton
                            key={index}
                            variant="rectangular"
                            height={50}
                            className="mb-4 rounded"
                        />
                    ))}
                </Box>
                <Box className="flex justify-between items-center mt-4">
                    <Skeleton variant="text" width={120} height={32} />
                    <Skeleton variant="text" width={200} height={32} />
                </Box>
            </Box>
        </Paper >
    );
};
