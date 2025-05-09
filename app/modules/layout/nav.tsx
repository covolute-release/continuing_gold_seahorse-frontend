import { Suspense } from "react";

import type { StoreRegion } from "@medusajs/types";
import CartButton from "@/modules/layout/components/cart-button";
import SideMenu from "@/modules/layout/components/side-menu";
import { Link } from "@remix-run/react";

export default function Nav({ regions }: { regions: StoreRegion[] }) {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <Link
              to="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase flex items-center"
              data-testid="nav-store-link"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shopable-60057.firebasestorage.app/o/stores%2Fa6ec3ce0-4a5e-4d0e-92b4-a8940b78de38%2Fimages%2Fgenerated-2c102d9c-0b32-441e-8074-f5cee8717946.png?alt=media"
                alt="Store Logo"
                className="h-10 w-10 mr-2 object-contain"
              />
              Shopable Store
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <Link className="hover:text-ui-fg-base" to="/account" data-testid="nav-account-link">
                Account
              </Link>
            </div>
            <Suspense
              fallback={
                <Link className="hover:text-ui-fg-base flex gap-2" to="/cart" data-testid="nav-cart-link">
                  Cart (0)
                </Link>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  );
}