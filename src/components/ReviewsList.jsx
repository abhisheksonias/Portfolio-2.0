import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  // Swipe variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === reviews.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? reviews.length - 1 : prevIndex - 1;
      }
    });
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  // Auto-swipe functionality
  useEffect(() => {
    if (reviews.length > 1) {
      const interval = setInterval(() => {
        paginate(1);
      }, 5000); // Auto-swipe every 5 seconds

      return () => clearInterval(interval);
    }
  }, [reviews.length, currentIndex]);

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
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div className="relative h-80 overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <div className="w-full h-full p-8 testimonial-card glass-effect rounded-2xl flex flex-col justify-between">
              {/* Star rating */}
              <div className="flex justify-center mb-4">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-yellow-500 fill-yellow-500 mx-1"
                  />
                ))}
                {[...Array(5 - reviews[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i + reviews[currentIndex].rating}
                    className="h-6 w-6 text-gray-400 mx-1"
                  />
                ))}
              </div>

              {/* Review content */}
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xl italic text-center leading-relaxed mb-6">
                  "{reviews[currentIndex].content}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center justify-center mt-6">
                {reviews[currentIndex].hasImage ? (
                  <img
                    src={reviews[currentIndex].image_url}
                    alt={reviews[currentIndex].name}
                    className="h-12 w-12 rounded-full mr-4 object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full mr-4 flex items-center justify-center bg-primary/20 text-primary font-bold text-lg uppercase">
                    {reviews[currentIndex].avatarInitials}
                  </div>
                )}
                <div className="text-center">
                  <h4 className="font-bold">
                    {reviews[currentIndex].name}
                  </h4>
                  {reviews[currentIndex].company && (
                    <p className="text-sm text-muted-foreground">
                      {reviews[currentIndex].company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 transition-all duration-200 hover:scale-110"
        disabled={reviews.length <= 1}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 transition-all duration-200 hover:scale-110"
        disabled={reviews.length <= 1}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-muted hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Swipe or use arrows to navigate • Auto-advances every 5 seconds
        </p>
      </div>
    </div>
  );
};

export default ReviewsList;