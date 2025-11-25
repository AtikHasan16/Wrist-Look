import React from "react";
import Link from "next/link";
import {
  IoCheckmarkCircle,
  IoRocketOutline,
  IoShieldCheckmark,
} from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

export const metadata = {
  title: "About Us | WristLook",
  description:
    "Learn about WristLook - Your premier destination for premium watches",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About WristLook
            </h1>
            <p className="text-xl text-base-content/80">
              Your premier destination for discovering and managing premium
              timepieces that define your style
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-base-content/80 leading-relaxed mb-4">
            WristLook is more than just a watch marketplace – its a curated
            platform designed to help you discover the perfect timepiece that
            complements your unique style and personality. We believe that a
            watch is not just a tool to tell time, but a statement of who you
            are.
          </p>
          <p className="text-lg text-base-content/80 leading-relaxed">
            Our mission is to provide watch enthusiasts and collectors with a
            seamless, secure, and enjoyable experience for exploring,
            discovering, and managing premium watches from around the world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body items-center text-center">
                <IoCheckmarkCircle className="w-16 h-16 text-primary mb-4" />
                <h3 className="card-title">Curated Collection</h3>
                <p className="text-sm text-base-content/70">
                  Browse through a carefully selected collection of luxury,
                  sport, casual, and smart watches
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body items-center text-center">
                <IoShieldCheckmark className="w-16 h-16 text-primary mb-4" />
                <h3 className="card-title">Secure Platform</h3>
                <p className="text-sm text-base-content/70">
                  Shop with confidence using our secure authentication and
                  protected user accounts
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body items-center text-center">
                <IoRocketOutline className="w-16 h-16 text-primary mb-4" />
                <h3 className="card-title">Easy Management</h3>
                <p className="text-sm text-base-content/70">
                  Seamlessly add, view, and manage your watch inventory with our
                  intuitive dashboard
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body items-center text-center">
                <BiSupport className="w-16 h-16 text-primary mb-4" />
                <h3 className="card-title">Expert Support</h3>
                <p className="text-sm text-base-content/70">
                  Get assistance from our knowledgeable team whenever you need
                  help
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="badge badge-primary mt-1">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Advanced Search & Filters
                  </h4>
                  <p className="text-sm text-base-content/70">
                    Find exactly what you are looking for with our powerful
                    search and filtering options
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="badge badge-primary mt-1">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Detailed Product Pages</h4>
                  <p className="text-sm text-base-content/70">
                    Get comprehensive information including specifications,
                    features, and pricing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="badge badge-primary mt-1">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">User Authentication</h4>
                  <p className="text-sm text-base-content/70">
                    Secure login with Google OAuth for protected features and
                    personalized experience
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="badge badge-primary mt-1">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Inventory Management</h4>
                  <p className="text-sm text-base-content/70">
                    Add, edit, and delete products with our easy-to-use
                    management dashboard
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="badge badge-primary mt-1">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Responsive Design</h4>
                  <p className="text-sm text-base-content/70">
                    Enjoy a seamless experience across all devices - desktop,
                    tablet, and mobile
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="badge badge-primary mt-1">✓</div>
                <div>
                  <h4 className="font-semibold mb-1">Real-time Updates</h4>
                  <p className="text-sm text-base-content/70">
                    Stay informed with instant notifications and live inventory
                    updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-base-200 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            WristLook by Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <p className="text-base-content/70">Premium Watches</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">4</div>
              <p className="text-base-content/70">Watch Categories</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-base-content/70">Trusted Brands</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <p className="text-base-content/70">Support Available</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Perfect Watch?
          </h2>
          <p className="text-lg text-base-content/80 mb-8">
            Explore our collection and discover timepieces that match your style
            and personality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/watches" className="btn btn-primary btn-lg">
              Browse Collection
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
