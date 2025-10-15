'use client';

import Image from 'next/image';
import { FabricCard, FabricName } from './styles';
import ScrollableSection from '@/components/Componet-wrapper';

const fabrics = [
  { name: 'Cotton', image: '/cotton.png' },
  { name: 'Silk', image: '/silk.png' },
  { name: 'Linen', image: '/linen.png' },
  { name: 'Wool', image: '/wool.png' },
  { name: 'Velvet', image: '/valvet.png' },
  { name: 'Blended', image: '/blend.png' },
];

export default function ShopByFabricType() {
  return (
    <ScrollableSection
      title="Shop by Fabric Type"
      subtitle="Discover luxurious fabrics crafted for comfort and style"
    >
      {fabrics.map((fabric) => (
        <FabricCard key={fabric.name}>
          <Image
            src={fabric.image}
            alt={fabric.name}
            fill
            style={{ objectFit: 'cover', borderRadius: '12px' }}
          />
          <FabricName>{fabric.name}</FabricName>
        </FabricCard>
      ))}
    </ScrollableSection>
  );
}
