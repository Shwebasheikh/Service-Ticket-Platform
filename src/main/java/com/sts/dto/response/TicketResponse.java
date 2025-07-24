package com.sts.dto.response;

import java.time.LocalDateTime;

import com.sts.enums.TicketStatus;

import lombok.NonNull;

public record TicketResponse(Long id2, String title2, String description2, @NonNull TicketStatus status2,
		LocalDateTime createdAt2) {


}