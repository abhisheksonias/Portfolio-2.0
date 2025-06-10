import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    rating: 5,
    content: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormState({ success: false, error: null });

    try {
      // Validate form
      if (!formData.name.trim()) {
        throw new Error("Please enter your name");
      }
      
      if (!formData.email.trim()) {
        throw new Error("Please enter your email address");
      }
      
      if (!validateEmail(formData.email)) {
        throw new Error("Please enter a valid email address");
      }
      
      if (!formData.content.trim()) {
        throw new Error("Please enter your review");
      }
      
      if (formData.content.trim().length < 10) {
        throw new Error("Your review is too short. Please provide more details about your experience.");
      }      // Submit to Supabase
      const { error } = await supabase
        .from("reviews")
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            company: formData.company.trim(),
            rating: formData.rating,
            content: formData.content.trim(),
            status: "pending", // All new reviews start as pending
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error("Supabase error:", error);
        throw new Error("Failed to submit your review. Please try again later.");
      }

      // Success state
      setFormState({ success: true, error: null });
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        rating: 5,
        content: "",
      });
    } catch (error) {
      setFormState({ success: false, error: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="review-form-container glass-effect p-6 rounded-xl">
      {formState.success ? (
        <div className="text-center py-8">
          <div className="mb-6 relative">
            <div className="absolute inset-0 animate-ping bg-green-500/20 rounded-full" style={{animationDuration: '2s', animationIterationCount: 1}}></div>
            <div className="bg-green-500/20 p-4 rounded-full inline-flex relative">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
                <path d="M7.75 12.75L10 15.25L16.25 8.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-3">Thank You for Your Review!</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Your review has been submitted and is pending approval. 
            It will appear on the website once reviewed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => setFormState({ success: false, error: null })}
              className="gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Submit Another Review
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border bg-background/50"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border bg-background/50"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border bg-background/50"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="p-1 transition-transform hover:scale-110"
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star
                      className={`h-6 w-6 transition-all duration-200 ${
                        formData.rating >= star
                          ? "text-yellow-500 fill-yellow-500 animate-pulse"
                          : "text-gray-400"
                      }`}
                      style={{
                        animationDuration: formData.rating >= star ? '2s' : '0s',
                        animationIterationCount: formData.rating === star ? 1 : 0
                      }}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm font-medium">
                  {formData.rating}/5
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-1">
                Review <span className="text-red-500">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border bg-background/50 h-32"
                placeholder="Please share your experience working with me..."
                required
              />
              <p className="text-xs text-muted-foreground mt-2">
                Please share details about the project, your experience working together, and the results achieved.
              </p>
            </div>

            {formState.error && (
              <div className="bg-red-500/10 text-red-500 p-3 rounded-md text-sm">
                {formState.error}
              </div>
            )}

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="gap-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
