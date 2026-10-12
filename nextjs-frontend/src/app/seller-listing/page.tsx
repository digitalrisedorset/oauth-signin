import CheckLogin from "@/components/auth/CheckLogin";
import CreateListing from "@/components/common/CreateListing";

export default function SellerListingPage() {
    return (
        <CheckLogin requiredAccess="seller">
            <CreateListing />
        </CheckLogin>
    );
}
