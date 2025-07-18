import { View } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";
import { PropertyListingProps } from "@/interfaces";

interface PropertyListingComponentProps {
  listings: PropertyListingProps[];
}

const PropertyListing = ({ listings }: PropertyListingComponentProps) => {
  return (
    <View style={{ flex: 1, rowGap: 16 }}>
      {listings.map((listing, index) => (
        <PropertyListingCard
          key={`property-${index}`}
          propertyName={listing.propertyName}
          rate={listing.rate}
          currency={listing.currency}
          amount={listing.amount}
          location={listing.location}
          favorite={listing.favorite}
          image={listing.image}
        />
      ))}
    </View>
  );
};

export default PropertyListing;