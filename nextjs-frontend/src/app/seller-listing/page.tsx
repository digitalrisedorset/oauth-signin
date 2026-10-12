import CheckLogin from "@/components/auth/CheckLogin";
import CreateListing from "@/components/common/CreateListing";
import Usp from "@/components/reactedge/Usp";

export default function SellerListingPage() {
    return (
        <CheckLogin requiredAccess="seller">
            <Usp />
            <CreateListing />
        </CheckLogin>
    );
}
