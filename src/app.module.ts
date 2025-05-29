import { Module } from '@nestjs/common';

import { AnalyticsModule } from './analytics/analytics.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EventsModule } from './events/events.module';
import { MatchModule } from './matches/matches.module';
import { MediaModule } from './media/media.module';
import { NotificationsModule } from './notifications/notifications.module';
import { OverlayModule } from './overlays/overlays.module';
import { PlayersModule } from './players/players.module';
import { ScoresModule } from './scores/scores.module';
import { SettingsModule } from './settings/settings.module';
import { SportsModule } from './sports/sports.module';
import { StreamsModule } from './streams/streams.module';
import { TeamsModule } from './teams/teams.module';
import { UsersModule } from './users/users.module';
import { TournamentsModule } from './tournaments/tournaments.module';

@Module({
  imports: [
    OverlayModule,
    MatchModule,
    TeamsModule,
    SportsModule,
    DatabaseModule,
    PlayersModule,
    UsersModule,
    MediaModule,
    SettingsModule,
    AnalyticsModule,
    StreamsModule,
    NotificationsModule,
    EventsModule,
    ScoresModule,
    TournamentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
