import { Box } from '@mui/material';
import Image from 'next/image';

interface RetainingWallPlotProps {
  imageUrl: string;
}

export const RetainingWallPlot: React.FC<RetainingWallPlotProps> = ({
  imageUrl,
}) => {
  return (
    <Box marginTop={4} marginBottom={4}>
      <Image
        src={imageUrl}
        alt="Retaining Wall Plot"
        width={600}
        height={400}
      />
    </Box>
  );
};
