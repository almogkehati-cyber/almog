import { colors } from '@/lib/colors';

export default function BackgroundOrbs() {
  return (
    <>
      {/* Small subtle orbs - as requested */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ 
          backgroundColor: `${colors.primary}15`,
          filter: 'blur(80px)',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ 
          backgroundColor: `${colors.secondaryContainer}21`,
          filter: 'blur(100px)',
        }}
      />
      <div 
        className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ 
          backgroundColor: `${colors.primaryContainer}1F`,
          filter: 'blur(90px)',
        }}
      />
    </>
  );
}
