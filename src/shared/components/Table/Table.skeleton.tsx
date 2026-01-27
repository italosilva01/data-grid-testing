import { Paper, Box, Skeleton } from '@mui/material';

export const TableSkeleton = () => {
    return (
        <Paper className="shadow-lg rounded-lg overflow-hidden">
            <Box className="p-4">
                <Skeleton 
                    variant="rectangular" 
                    height={48} 
                    className="mb-2 rounded" 
                />
                {[...Array(5)].map((_, index) => (
                    <Skeleton
                        key={index}
                        variant="rectangular"
                        height={56}
                        className="mb-2 rounded"
                    />
                ))}
                <Box className="flex justify-between items-center mt-4">
                    <Skeleton variant="text" width={120} height={32} />
                    <Skeleton variant="text" width={200} height={32} />
                </Box>
            </Box>
        </Paper>
    );
};
