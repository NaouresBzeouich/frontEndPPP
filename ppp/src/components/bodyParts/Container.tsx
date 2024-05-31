import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import PhotoInsertPlace from '../containerContent/PhotoInsertPlace';
import TextContent from '../containerContent/Text'; 
import { InsertCommentOutlined } from '@mui/icons-material';
import PhotosResult from '../containerContent/PhotosResult';

interface BodyContainerProps {
  text: string;
}

const BodyContainer: React.FC<BodyContainerProps> = ({ text }) => {
  const renderContent = () => {
    switch (text.toLowerCase()) {
      case 'start now':
        return <TextContent />;
      case 'see the result':
        return <PhotoInsertPlace/>;
      case 'view image results':
        return <PhotosResult />;
      default:
        return <TextContent />;
    }
  };
    return (
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        >
          {renderContent()}
            </Box>
    )
}

export default BodyContainer ; 