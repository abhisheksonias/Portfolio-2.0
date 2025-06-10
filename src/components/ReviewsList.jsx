import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        console.log("Fetching reviews from Supabase...");
        // Only fetch approved reviews
        const { data, error } = await supabase
          .from("reviews")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false });

        console.log("Supabase response:", { data, error });

        if (error) throw error;
        // Generate random placeholder images for reviews without profile photos
        const reviewsWithImages = data.map((review) => {
          // If image_url exists, use it. Otherwise, use initials.
          let initials = "";
          if (review.name) {
            const parts = review.name.trim().split(" ");
            initials = parts[0][0].toUpperCase();
            if (parts.length > 1) {
              initials += parts[parts.length - 1][0].toUpperCase();
            }
          }
          return {
            ...review,
            avatarInitials: initials,
            hasImage: !!review.image_url,
          };
        });
        setReviews(reviewsWithImages);
      } catch (error) {
        setError("Failed to load reviews. Please try again later.");
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="inline-block animate-spin rounded-full border-4 border-solid border-primary border-t-transparent h-12 w-12"></div>
        <p className="mt-4 text-muted-foreground">Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">
          No reviews available yet. Be the first to leave a review!
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {reviews.map((review) => (
        <motion.div
          key={review.id}
          variants={itemVariants}
          className="testimonial-card glass-effect p-6 rounded-xl"
          whileHover={{ scale: 1.03 }}
        >
          {/* Star rating */}
          <div className="flex mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-500 fill-yellow-500"
              />
            ))}
            {[...Array(5 - review.rating)].map((_, i) => (
              <Star
                key={i + review.rating}
                className="h-5 w-5 text-gray-400"
              />
            ))}
          </div>

          <p className="text-lg italic mb-6">"{review.content}"</p>

          <div className="flex items-center">
            {review.hasImage ? (
              <img
                src={review.image_url}
                alt={review.name}
                className="h-12 w-12 rounded-full mr-4 object-cover"
              />
            ) : (
              <div className="h-12 w-12 rounded-full mr-4 flex items-center justify-center bg-primary/20 text-primary font-bold text-lg uppercase">
                {review.avatarInitials}
              </div>
            )}
            <div>
              <h4 className="font-bold">{review.name}</h4>
              {review.company && (
                <p className="text-sm text-muted-foreground">
                  {review.company}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ReviewsList;
