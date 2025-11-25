import React from "react";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const metadata = {
  title: "Contact Us | WristLook",
  description:
    "Get in touch with WristLook for any inquiries about our premium watch collection.",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-base-content/70">
              Have questions about our watches? We&apos;re here to help. Reach
              out to us and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 ">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-4xl mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          First Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Last Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Phone</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Subject</span>
                    </label>
                    <select className="select select-bordered w-full">
                      <option>General Inquiry</option>
                      <option>Product Question</option>
                      <option>Order Support</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-control flex flex-col gap-2">
                    <label className="label">
                      <span className="label-text font-semibold">Message</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-50 w-full"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">Contact Info</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <IoMailOutline className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:support@wristlook.com"
                        className="text-sm text-base-content/70 hover:text-primary transition-colors"
                      >
                        support@wristlook.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <IoCallOutline className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-sm text-base-content/70 hover:text-primary transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <IoLocationOutline className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-sm text-base-content/70">
                        123 Watch Avenue
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <IoTimeOutline className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-sm text-base-content/70">
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat: 10:00 AM - 4:00 PM
                        <br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">Follow Us</h2>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-outline btn-primary"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-outline btn-primary"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-outline btn-primary"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-outline btn-primary"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Card */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">Quick Help</h2>
                <div className="space-y-2 text-sm">
                  <p className="text-base-content/70">
                    <span className="font-semibold text-base-content">
                      Response Time:
                    </span>{" "}
                    We typically respond within 24 hours
                  </p>
                  <p className="text-base-content/70">
                    <span className="font-semibold text-base-content">
                      Returns:
                    </span>{" "}
                    30-day return policy on all watches
                  </p>
                  <p className="text-base-content/70">
                    <span className="font-semibold text-base-content">
                      Warranty:
                    </span>{" "}
                    2-year manufacturer warranty
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="card bg-base-200 shadow-lg overflow-hidden">
            <div className="aspect-video bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <IoLocationOutline className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-lg font-semibold">Store Location</p>
                <p className="text-sm text-base-content/70">
                  123 Watch Avenue, New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
